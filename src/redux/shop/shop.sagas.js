import { takeLatest, call, put, all} from 'redux-saga/effects';

import { firestore, converCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'


import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    try{
        const collectionRef = firestore.collection('collections');
        const snapshop = yield collectionRef.get();
        const collectionsMap = yield call(converCollectionsSnapshotToMap, snapshop); 
        yield put (fetchCollectionsSuccess(collectionsMap));
    } catch ( error ) {
        yield put (fetchCollectionsFailure(error.message))


    }



}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync )
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}















































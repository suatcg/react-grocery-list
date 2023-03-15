import { all, fork } from 'redux-saga/effects';
import mySagaCategory from './Category_Saga';

export function* rootSaga() {
	yield all([fork(mySagaCategory)]);
}

// The problem that was got from here when I first fetch the JSON data, due to that Data render dynamic elements; it looks that first is empty when i give the empty object to reducer it fetches correctly but that won't work
// const quantityItems = useMemo(() => {
// 	return category.map((el) => {
// 		return (
// 			<>
// 				<input className="input-number" type="number" value={1} />
// 				<div>
// 					<input className="button-plus" type="button" value="&#43;" />
// 					<input className="button-minus" type="button" value="&#43;" />
// 				</div>
// 			</>
// 		);
// 	});
// }, [category]);

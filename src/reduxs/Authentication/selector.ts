import { createSelector } from 'reselect';

const getUsersDomain = () => (state: any) => state.get('usersDomain');

const selectUsers = () => createSelector(
  getUsersDomain(),
  usersState => usersState.get('users').toJS()
);

const selectIsLoading = () => createSelector(
  getUsersDomain(),
  usersState => usersState.get('isLoading')
);

const selectIsFetched = () => createSelector(
  getUsersDomain(),
  usersState => usersState.get('isFetched')
);

export {
  selectUsers,
  selectIsLoading,
  selectIsFetched
};

export default getUsersDomain;
//===============================Use=================================
// import React from 'react'
// import { useSelector } from 'react-redux'
// import { createSelector } from 'reselect'

// const selectNumOfDoneTodos = createSelector(
//   state => state.todos,
//   todos => todos.filter(todo => todo.isDone).length
// )

// export const DoneTodosCounter = () => {
//   const numOfDoneTodos = useSelector(selectNumOfDoneTodos)
//   return <div>{numOfDoneTodos}</div>
// }

// export const App = () => {
//   return (
//     <>
//       <span>Number of done todos:</span>
//       <DoneTodosCounter />
//     </>
//   )
// }
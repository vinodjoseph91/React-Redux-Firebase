const initState = {
    projects: [
        { id: '1', title: 'First title', content: 'First content' },
        { id: '2', title: 'Second title', content: 'Second content' },
        { id: '3', title: 'Third title', content: 'Third content' },
        { id: '4', title: 'Fourth title', content: 'Fourth content' },
    ]

};
const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;
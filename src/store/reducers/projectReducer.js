const initState = {
    projects:[
        {id: 1, title: 'help me find peach', content: 'dassk jdna skldj'},
        {id: 2, title: 'collect all the stars', content: 'da sskjd naskldj'},
        {id: 3, title: 'egg hunt with sumohi', content: 'das skjdn askldj'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state;
}

export default projectReducer
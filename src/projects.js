const projects = [
    {
        id: 0,
        name: `Personal`,
        pending: 6,
        completed: 5,
        description: `This is a new description`,
        tasks: [
            {
                name: `Do the dishes`,
                dueDate: `2022-12-22`,
                description: `Personal description`
            },
        ]
    },
    {
        id: 1,
        name: `Work`,
        pending: 1,
        completed: 2,
        description: `This is a work project description`,
        tasks: [
            {
                name: `File suit`,
                dueDate: `2021-11-11`,
                description: `Description`,
                priority: `low`,
                done: true,
            },
            {
                name: `Read papers`,
                dueDate: `2021-06-18`,
                description: ``,
                priority: `high`,
                done: false,
            },
        ]
    },

]

export default projects
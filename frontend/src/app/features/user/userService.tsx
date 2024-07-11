import axios from 'axios';


export const fetchUserAll = async (page: number, size: number, sortField: string, sortOrder: string, search: string) => {
    const response = await axios.get('http://localhost:3000/api/users', {
        params: {
            page,
            size,
            sortField,
            sortOrder,
            search,
        },
    });
    return response.data;
};
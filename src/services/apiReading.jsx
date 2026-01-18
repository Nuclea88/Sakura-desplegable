import axios from "axios";

const apiReading=()=>{
    const url="https://696cbaecf4a79b31517fa5ea.mockapi.io/api/v1/readings";

    const getByUserId = async (userId) => {
    const response = await axios.get(url); 
    
    const filtered = response.data.filter(reading => reading.userId == userId);
    
    return filtered;
};
        
    const editName = async (id,name) => {
        const response = await axios.put(`${url}/${id}`, { name });
        return response.data;
    }

    
    const deleteReading = async (id) => {
        const response = await axios.delete(`${url}/${id}`);
        return response;
    }
    
    return { getByUserId, editName, deleteReading}
}

export default apiReading;
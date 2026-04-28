import { pool } from "../../config/db"

const getAllUsers = async () => {
    const result = await pool.query(` SELECT * FROM users`);
    return result
}


const createUser = async (payload: Record<string, unknown>) => {
    const { name, email, password, Phone, role } = payload;

    const result = await pool.query(`INSERT INTO users( name, email, password, Phone, role) VALUES( $1, $2, $3, $4 , $5) RETURNING *`, [name, email, password, Phone, role])

    return result
}


const updateUser = async (name: string, email: string, password: string, Phone: string, role: string, userId: string) => {
    const result = await pool.query(`UPDATE users SET name = $1, email =$2, password=$3, Phone=$4, role=$5 WHERE id= $6 RETURNING *`, [name, email, password, Phone, role, userId])

    return result
}


export const userService = { getAllUsers, createUser, updateUser }
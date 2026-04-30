import { pool } from "../../config/db";

const postBookings = async (payload: Record<string, unknown>) => {
    const { customer_id, vehicle_id, rent_start_date, rent_end_date } = payload;

    const result = await pool.query(`INSERT INTO booking () VALUES() RETURNING *`, [])
    return result;
}


export const bookingService = { postBookings }
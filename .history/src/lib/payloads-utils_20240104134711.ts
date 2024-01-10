import { NextRequest } from "next/server";

 export const getServerSideUser = async (
    cookies: NextRequest["cookies"] | Readonly
 )
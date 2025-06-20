"use client"
import LoginPage from "./@login/page";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";



const AdminLayout = ({children}) =>{
  const {user} = useContext(AuthContext);
  return (
    <>
    <Header></Header>
        {user.logged ? children: <LoginPage></LoginPage>}
    </>
    );
}
export default AdminLayout



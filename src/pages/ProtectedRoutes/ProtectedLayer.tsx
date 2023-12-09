import { Outlet } from "react-router-dom";
import Header from "../../components/ui/Header";

export default function ProtectedLayer() {
  return (
    <>
      <Header />

      <main className="grid place-items-center pt-4" >
        <Outlet />
      </main>

    </>
  )
}

import { Outlet } from 'react-router-dom';
import { Avatar} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

export default function AuthLayer() {
  return (
    <main className='grid overflow-y-scroll place-items-center h-screen bg-image'>

      <section className="w-11/12 max-w-4xl mt-[34px] pt-8 relative  p-4 bg-white text-black rounded shadow shadow-second ">

        <Avatar sizes="80"
          sx={{
            bgcolor: "#2e7d32", width: 60, height: 60, position: "absolute",
            top: "-30px", left: "calc(50% - 30px)"
          }}>
          <PersonIcon fontSize="large" />

        </Avatar>
        <Outlet />
      </section>
    </main>
  )
}

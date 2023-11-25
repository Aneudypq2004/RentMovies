import {  Button, Stack, Avatar } from '@mui/material'
export default function P404() {
  return (
    <main className='bg-image h-screen p-4 grid place-items-center'>

      <Stack spacing={8} className='bg-second rounded shadow  relative p-4 py-8 shadow-black w-11/12 max-w-3xl'>

        <Avatar sizes="90"
          sx={{
            bgcolor: "#ff0000", width: 80, height: 80, position: "absolute",
            top: "-30px", left: "calc(50% - 40px)"
          }}>

          404

        </Avatar>

        <h1 className='text-3xl text-white uppercase text-bold text-center'>
          The page doesnt exist
        </h1>

        <Button
          variant="contained"
          href='/'
          color="error"
          size="large">Back</Button>

      </Stack>
    </main>
  )
}

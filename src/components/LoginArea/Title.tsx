import Typography from "@mui/material/Typography/Typography";

export default function Title({ title, className = "text-center" }: { title: String, className?: string }) {
  return (
    <Typography
      sx={
        { marginBottom: "1rem", marginTop:"1rem" }

      } className={`uppercase ${className}`} component="h1" variant="h5">
      {title}
    </Typography>
  )
}

import { ExpandMore, Place } from "@mui/icons-material";
import GeneralInfo from "./metadata";
import { Footer } from "@/app/_components/Footer";
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Chip, Divider, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  const futureSections = ["Skills", "Experience", "Education", "Hobby"];
  return (
    <div className="max-w-screen-lg w-full mx-auto max-lg:p-4">
      <p className="bg-red-400 text-white text-center font-bold p-2 rounded mt-2">
        {"This website is currently in development. A lot of content is unavailable."}
      </p>
      <Paper className="p-4 mt-6">
        <div className="flex flex-row gap-8 max-lg:flex-col items-start">
          <div className="w-fit max-lg:ml-8">
            <div className="size-36 bg-slate-600 rounded-xl    overflow-hidden m-auto">
              <Image src={"/photo-avatar.jpg"} alt={GeneralInfo.Fullname} width={576} height={576} />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">{GeneralInfo.Fullname}</h1>
            <p className="text-slate-600 text-xl">{GeneralInfo.Position}</p>
            <p className="text-slate-600 text-sm my-2">
              <Place fontSize="small" />
              <span className="pl-0.5">{GeneralInfo.Location}</span>
            </p>
            <div className="flex flex-row gap-2">
              {GeneralInfo.Pills.map((skill, key) => (
                <Chip className="min-w-14" key={key} label={skill} variant="outlined" />
              ))}
            </div>
          </div>
        </div>
        <Divider sx={{ my: 4 }} />
        <p className="indent-6">{GeneralInfo.Summary}</p>
      </Paper>
      <Marquee className="my-4 py-2 gap-16" pauseOnHover={true}>
        {GeneralInfo.Feedbacks.map((feedback, key) => (
          <Card key={key} className="mx-2 min-h-60">
            <CardContent className="max-w-72">
              <Typography gutterBottom variant="h5" component="div">
                {feedback.title}
              </Typography>
              <Typography className="w-full" variant="body2" sx={{ color: "text.secondary" }}>
                {feedback.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Marquee>

      <>
        {futureSections.map((section, key) => {
          return (
            <Accordion elevation={1} disabled={true} key={key}>
              <AccordionSummary expandIcon={<ExpandMore />}>{section}</AccordionSummary>
              <AccordionDetails>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                }
              </AccordionDetails>
            </Accordion>
          );
        })}
      </>
      <Footer />
    </div>
  );
}

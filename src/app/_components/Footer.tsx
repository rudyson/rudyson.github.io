import { FC } from "react";
import { Email, GitHub, LinkedIn, Telegram } from "@mui/icons-material";
import Link from "next/link";
import GeneralInfo from "../metadata";
import { Paper } from "@mui/material";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}: FooterProps) => {
  return (
    <Paper className="mt-4 px-4 py-3 w-full flex flex-row justify-between text-sm max-lg:flex-col max-lg:items-center gap-4">
      <div className="text-slate-600">{`© 2025 ${GeneralInfo.Fullname}`}</div>
      <div className="grid grid-flow-col gap-2 w-fit">
        <Link href={GeneralInfo.Contacts.EmailLink} target={"_blank"}>
          <Email />
        </Link>
        <Link href={GeneralInfo.Contacts.LinkedIn} target={"_blank"}>
          <LinkedIn />
        </Link>
        <Link href={GeneralInfo.Contacts.Github} target={"_blank"}>
          <GitHub />
        </Link>
        <Link href={GeneralInfo.Contacts.Telegram} target={"_blank"}>
          <Telegram />
        </Link>
      </div>
    </Paper>
  );
};

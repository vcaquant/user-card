"use client";

import Image from "next/image";
import { Linkedin, Github, Facebook, Instagram } from "lucide-react";

export type UserCardProps = {
  user: {
    firstname: string;
    lastname: string;
    username: string;
    avatar: string;
    description: string;

    links: {
      linkedin?: string;
      github?: string;
      x?: string;
      facebook?: string;
      instagram?: string;
    };
  };
};

export const UserCardSimple = (props: UserCardProps) => {
  return (
    <div className="rounded-lg lg:w-96 w-80 h-[550px] mt-10 bg-secondary transition-all card-effect hover:scale-105">
      <div className="flex flex-col bg-secondary rounded-lg relative w-full h-full justify-center overflow-hidden">
        <div className="relative flex w-full h-full justify-center">
          <div className="absolute -top-4 w-screen h-full bg-blue-200 -rotate-[15deg]" />
          <div className="absolute -top-4 w-screen h-full bg-blue-500 -rotate-[10deg]" />
          <div className="absolute -top-2 w-screen h-full bg-blue-800 rotate-[10deg]" />
          <div className="absolute -top-5 w-screen h-full bg-primary -rotate-[3deg]" />
          <img
            className="h-28 w-28 rounded-full absolute inset-0 m-auto border-2 border-secondary shadow-md shadow-primary"
            src={props.user.avatar}
            alt="user avatar"
          />
        </div>
        <div className="flex flex-1 flex-col w-full items-center justify-center lg:mt-5 p-6">
          <h1 className="text-3xl font-bold text-primary">
            {props.user.firstname} {props.user.lastname}
          </h1>
          <p className="text-xs text-primary">@{props.user.username}</p>
          <div className="flex gap-4 mt-6 mb-6">
            {props.user.links.linkedin && (
              <a href={props.user.links.linkedin} target="_blank">
                <Linkedin strokeWidth={2.5} />
              </a>
            )}
            {props.user.links.github && (
              <a href={props.user.links.github} target="_blank">
                <Github strokeWidth={2.5} />
              </a>
            )}
            {props.user.links.facebook && (
              <a href={props.user.links.facebook} target="_blank">
                <Facebook strokeWidth={2.5} />
              </a>
            )}
            {props.user.links.instagram && (
              <a href={props.user.links.instagram} target="_blank">
                <Instagram strokeWidth={2.5} />
              </a>
            )}
          </div>
          <p
            className="text-sm text-primary font-semibold text-center"
            dangerouslySetInnerHTML={{ __html: props.user.description }}
          />
        </div>
        <div className="flex gap-2 w-full items-center justify-center mt-5 p-6">
          <button className="flex flex-1 justify-center bg-primary text-primary-foreground p-2 rounded-lg border-2 border-primary font-bold hover:bg-primary/90">
            Follow
          </button>
          <button className="flex flex-1 justify-center bg-secondary text-secondary-foreground p-2 rounded-lg border-2 border-primary font-bold hover:bg-secondary/90">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

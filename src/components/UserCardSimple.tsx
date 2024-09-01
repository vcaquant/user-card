"use client";

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
    <div className="card-effect mt-10 h-[550px] w-80 rounded-lg bg-secondary transition-all hover:scale-105 lg:w-96">
      <div className="relative flex size-full flex-col justify-center overflow-hidden rounded-lg bg-secondary">
        <div className="relative flex size-full justify-center">
          <div className="absolute -top-4 h-full w-screen -rotate-[15deg] bg-blue-200" />
          <div className="absolute -top-4 h-full w-screen -rotate-[10deg] bg-blue-500" />
          <div className="absolute -top-2 h-full w-screen rotate-[10deg] bg-blue-800" />
          <div className="absolute -top-5 h-full w-screen -rotate-3 bg-primary" />
          <img
            className="absolute inset-0 m-auto size-28 rounded-full border-2 border-secondary shadow-md shadow-primary"
            src={props.user.avatar}
            alt="user avatar"
          />
        </div>
        <div className="flex w-full flex-1 flex-col items-center justify-center p-6 lg:mt-5">
          <h1 className="text-3xl font-bold text-primary">
            {props.user.firstname} {props.user.lastname}
          </h1>
          <p className="text-xs text-primary">@{props.user.username}</p>
          <div className="my-6 flex gap-4">
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
            className="text-center text-sm font-semibold text-primary"
            dangerouslySetInnerHTML={{ __html: props.user.description }}
          />
        </div>
        <div className="mt-5 flex w-full items-center justify-center gap-2 p-6">
          <button className="flex flex-1 justify-center rounded-lg border-2 border-primary bg-primary p-2 font-bold text-primary-foreground hover:bg-primary/90">
            Follow
          </button>
          <button className="flex flex-1 justify-center rounded-lg border-2 border-primary bg-secondary p-2 font-bold text-secondary-foreground hover:bg-secondary/90">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}
const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  const socialNavData = [
    {
      title: "YouTube",
      href: "https://youtube.com",
      icon: <Youtube className="w-5 h-5" />,
    },
    {
      title: "GitHub",
      href: "https://github.com",
      icon: <Github className="w-5 h-5" />,
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      title: "Facebook",
      href: "https://facebook.com",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      title: "Slack",
      href: "https://slack.com",
      icon: <Slack className="w-5 h-5" />,
    },
  ];

  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialNavData.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                key={item?.title}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border-2 rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-dark font-semibold",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;

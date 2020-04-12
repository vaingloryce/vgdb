import React from "react";
import { ReactComponent as Home } from "../../assets/vghome.svg";
import { ReactComponent as Stats } from "../../assets/stats.svg";
import { ReactComponent as PatchNotes } from "../../assets/patch_notes.svg";
import { ReactComponent as Donate } from "../../assets/donate.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const defaultIcon = Icon => (<Icon height={50} width={50} />);

export const HomeIcon = () => defaultIcon(Home);
export const StatsIcon = () => defaultIcon(Stats);
export const PatchNotesIcon = () => defaultIcon(PatchNotes);
export const DonateIcon = () => defaultIcon(Donate);
export const LogoIcon = () => defaultIcon(Logo);
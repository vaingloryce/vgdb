import React from "react";
import "./index.scss";
import { HomeIcon, StatsIcon, PatchNotesIcon, DonateIcon, LogoIcon } from "../Icon";

const SidebarMenu = () => {
  return (
    <div class="sidebar-menu">
      <div class="heading">
        <LogoIcon />
      </div>
      <nav class="body">
        <ul>
          <li class="active"><HomeIcon /></li>
          <li><StatsIcon /></li>
          <li><PatchNotesIcon /></li>
          <li><DonateIcon /></li>
        </ul>
      </nav>
      <div class="footer"></div>
    </div>
  );
}

export default SidebarMenu;
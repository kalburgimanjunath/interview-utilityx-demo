import { ThreeDots, Star, Meta, People, More } from "react-bootstrap-icons";

export default function Header() {
  return (
    <div className="header">
      <div className="logo_container">
        <div className="font-bold text-2md">
          <span>Toco's Tacos</span>
        </div>
        <div className="flex justify-arround icons">
          <Star />
          <span>|</span>
        </div>
        <div className="flex justify-arround icons">
          <Meta />
          <span>Toco & Co.(free)</span>
          <span>|</span>
        </div>
        <div className="flex justify-arround icons">
          <People />
          <span>Team Visible</span>
        </div>
      </div>
      <div className="flex justify-arround icons">
        <div>
          <ThreeDots />
        </div>
        <div className="underline">Show Menu</div>
      </div>
    </div>
  );
}

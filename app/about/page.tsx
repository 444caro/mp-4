import AboutCatGallery from "@/components/AboutCatGallery";
import Nav from "@/components/Nav";
import "../globals.css";

export default function About() {
  return (
    <div className = "page-wrapper">
      <Nav />
      <h1> About Cat Gallery </h1>
      <AboutCatGallery />
    </div>
  );
}
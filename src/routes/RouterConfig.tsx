import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/templates/main_layout";
import { Home } from "@/components/pages/home";
import { About } from "@/components/pages/about";
import { Profile } from "@/components/pages/profile";
import { Works } from "@/components/pages/works";
import { Skills } from "@/components/pages/skills";
import { NotFound } from "@/components/pages/not_found";

export const RouterConfig: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/works" element={<Works />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

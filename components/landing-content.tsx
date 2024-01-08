"use clients";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Alex",
    avatar: "A",
    title: "Software Engineer",
    description: "This platform is a last stop shop for all things AI.",
  },
  {
    name: "Tyler",
    avatar: "T",
    title: "Artist",
    description:
      "Genius has given me great ideas for my work and helps me everyday!",
  },
  {
    name: "Daniel",
    avatar: "D",
    title: "University Student",
    description:
      "Genius has helped me with my homework when I struggle with it, its a life saver!",
  },
  {
    name: "Kurt",
    avatar: "K",
    title: "Operator",
    description:
      "I get the answer to any question I have with Genius.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((item) => (
            <Card
              key={item.description}
              className="bg-[#192339] border-none text-white"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

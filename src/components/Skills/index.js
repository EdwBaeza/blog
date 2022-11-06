import React from "react";
import { SectionTitle } from "../SectionTitle";
import { SkillBar } from "../SkillBar";

const SKILLS = [
  {
    label: "Python",
    value: 100,
  },
  {
    label: "Django Rest Framework",
    value: 90,
  },
  {
    label: "Ruby",
    value: 100,
  },
  {
    label: "Rails",
    value: 95,
  },
  {
    label: "Docker",
    value: 85,
  },
  {
    label: "Docker Compose",
    value: 85,
  },
  {
    label: "Golang",
    value: 85,
  },
  {
    label: "Echo",
    value: 85,
  },
  {
    label: "Javascript",
    value: 85,
  },
  {
    label: "React JS",
    value: 85,
  },
  {
    label: "Postgres",
    value: 95,
  },

  {
    label: "Mongo",
    value: 80,
  },
];

export function Skills() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <SectionTitle text="Skills" id="skills" />
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {SKILLS.map((item) => {
              return (
                <div className="relative">
                  <SkillBar skillName={item.label} percentage={item.value} />
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}

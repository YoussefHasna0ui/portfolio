import { Card, CardContent } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EduTimeline, ExTimeline } from "./timeline";
import { educations, experiences } from "@/lib/constants";

export function EducationExperience() {
  return (
    <Tabs defaultValue="education" className="w-full mt-10 bg-s">
      <TabsList className="grid w-full grid-cols-2 dark:bg-zinc-700 text-zinc-900">
        <TabsTrigger
          value="experience"
          className=""
        >
          Erfahrung
        </TabsTrigger>
        <TabsTrigger
          value="education"
          className=""
        >
          Ausbildung
        </TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <Card className="dark:bg-zinc-700">
          <CardContent className="dark:bg-zinc-700 space-y-2 mb-5">
            {/* <Timeline datas={experiences}/> */}
            <ExTimeline events={experiences} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="education">
        <Card className="dark:bg-zinc-700">
          <CardContent className="space-y-2 mb-5">
            {/* <Timeline datas={experiences}/> */}
            <EduTimeline events={educations} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

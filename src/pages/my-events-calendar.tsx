import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";

// Mock data - replace with actual data from backend
const appEvents = [
  {
    id: 1,
    title: "Summer Cultural Festival",
    date: "2024-07-15",
    time: "14:00",
    venue: "Central Park",
    price: "$25",
    description: "Celebrate diverse cultures with music, food, and performances"
  },
  {
    id: 2,
    title: "Tech Networking Night",
    date: "2024-06-20",
    time: "18:30",
    venue: "Innovation Hub",
    price: "$15",
    description: "Connect with tech professionals and entrepreneurs"
  }
];

const userEvents = [
  {
    id: 101,
    title: "Family Reunion",
    date: "2024-08-01",
    time: "12:00",
    venue: "Home",
    isPrivate: true,
    description: "Annual family get-together"
  }
];

const MyEventsCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto py-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            <Tabs defaultValue="app-events" className="space-y-8">
              <TabsList>
                <TabsTrigger value="app-events">LATH Events</TabsTrigger>
                <TabsTrigger value="my-events">My Events</TabsTrigger>
              </TabsList>

              <TabsContent value="app-events">
                <div className="grid gap-6">
                  {appEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>{event.title}</CardTitle>
                          <CardDescription>
                            {event.date} at {event.time} • {event.venue}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>{event.description}</p>
                          <p className="text-2xl font-bold mt-4">{event.price}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-brown text-cream hover:bg-brown-light">
                            Buy Tickets
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="my-events">
                <div className="space-y-6">
                  <Button className="w-full mb-6">Create New Event</Button>
                  {userEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>{event.title}</CardTitle>
                          <CardDescription>
                            {event.date} at {event.time} • {event.venue}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>{event.description}</p>
                        </CardContent>
                        <CardFooter className="flex gap-4">
                          <Button variant="outline" className="flex-1">Edit</Button>
                          <Button variant="destructive" className="flex-1">Delete</Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEventsCalendar;

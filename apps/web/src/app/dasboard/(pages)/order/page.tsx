import { ScrollArea } from "@/components/ui/scroll-area";
import { CalendarDays } from "lucide-react";
import { ListTodo } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListEvent from "./component/listEvent";
import AddEvent from "./component/addEvent";

//note bug color saat di klick
const Customer = () => {
  return (
    <Tabs defaultValue="listevent" className="-mt-2">
      <TabsList>
        <div className="m-auto flex max-w-6xl flex-wrap gap-8">
          <TabsTrigger
            value="listevent"
            className="flex items-center gap-4 rounded-lg bg-green-100 p-6 transition duration-300 hover:border-gray-200 hover:bg-green-200 hover:shadow-xl "
          >
            <ListTodo className="h-8 w-8 text-green-600 max-md:h-4 max-md:w-4" />
            <div>
              <h2 className="mb-2 text-left text-xl font-semibold text-green-800  max-md:text-sm md:text-2xl">
                List Event
              </h2>
              <p className="text-sm text-green-600 max-md:hidden">
                View all your events here
              </p>
            </div>
          </TabsTrigger>

          <TabsTrigger
            value="addevent"
            className="flex items-center gap-4 rounded-lg bg-blue-100 p-6 transition duration-300 hover:border-gray-200 hover:bg-blue-200 hover:shadow-2xl"
          >
            <CalendarDays className="h-8 w-8 text-blue-600 max-md:h-4 max-md:w-4" />
            <div>
              <h2 className="mb-2 text-left text-xl font-semibold text-blue-800 max-md:text-sm md:text-2xl">
                Add Event
              </h2>
              <p className="text-sm text-blue-600 max-md:hidden">
                Click here to add a new event
              </p>
            </div>
          </TabsTrigger>
        </div>
      </TabsList>

      <div className="pt-8">
        <TabsContent value="addevent">
          <AddEvent></AddEvent>
        </TabsContent>
        <TabsContent value="listevent">
          <ListEvent></ListEvent>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default Customer;

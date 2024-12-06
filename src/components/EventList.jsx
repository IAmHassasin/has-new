const EventCard = ({ event }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <img src={event.image} alt={event.name} className="w-full rounded" />
      <div className="grid grid-cols-2 text-left mt-4">
        <div className="">
          <p className="text-sm text-gray-500">{new Date(event.date).toUTCString()}</p>
          <p className="text-gray-700">{event.description}</p>
        </div>
        <div className="border-l-4 border-slate-500 pl-2">
          <p className="text-sm text-gray-500">{"Ends:"}</p>
          <p className="text-gray-700">{"1"} <small>{"day"}</small>1 <small>hour </small> 39 <small>min</small></p>
        </div>
      </div>
    </div>
  );
};

const EventList = ({ events }) => {
    return (
      <div className="grid grid-cols-1 gap-6">
        {events.map((event, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <EventCard key={index} event={event} />
        ))}
      </div>
    );
  };

export default EventList;
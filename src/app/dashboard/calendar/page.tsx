"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function Page() {

  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([])

  const smallDate = date?.toLocaleDateString("es-ES",{
    weekday:'long',
    day:'numeric',
    month:'long'
  });

  return (
    <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-4">
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      disabled={(date)=> date.getDay() === 0 || date.getDay() === 6} //deshabilita los dias domingos (dia 0) y sabados (dia 6)
    />
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      disabled={(date)=> date > new Date()} // deshabilita las fechas mayores a la actual
    />
    <Calendar
      mode="multiple" // activa la version selector multiple de fechas
      selected={multipleDates}
      onSelect={setMultipleDates}
      className="rounded-md border"
    />
    <div>
      <h1 className="text-3xl">Información</h1>
      <div className="border-b"></div>
      <p>{smallDate}</p>
      <p>{multipleDates?.map((date)=> date.toLocaleDateString()).join(', ')}</p>
    </div>
    </div>
  );
}
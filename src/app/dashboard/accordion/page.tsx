import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {

  const items = [
    {
      id:"item-1",
      question:"Is it accessible?",
      answer:"Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      id:"item-2",
      question:"Is it styled?",
      answer:"Yes. It comes with default styles that matches the other components&apos; aesthetic."
    },
    {
      id:"item-3",
      question:"Is it animated?",
      answer:"Yes. It&apos;s animated by default, but you can disable it if you prefer."
    }
  ]
  return (
    <Accordion type="multiple" className="w-full">
      {items.map(item => (
        <AccordionItem value={item.id} key={item.id}>
        <AccordionTrigger>{item.question}</AccordionTrigger>
        <AccordionContent>
          {item.answer}
        </AccordionContent>
      </AccordionItem>
      ))
      }
    </Accordion>
  );
}

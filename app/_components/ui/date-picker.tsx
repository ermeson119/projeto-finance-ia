"use client";

import { Calendar } from "./calendar"; // Importando o componente Calendar
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover"; // Importando Popover
import { CalendarIcon } from "lucide-react"; // Ícone do calendário
import { cn } from "../../_lib/utils"; // Função utilitária de classes
import { ptBR } from "date-fns/locale"; // Localização em pt-BR
import { Button } from "./button"; // Botão estilizado

// Propriedades aceitas pelo DatePicker
interface DatePickerProps {
  value?: Date;
  onChange: (date: Date | undefined) => void; // Função que será chamada ao selecionar uma data
}

export const DatePicker = ({ value, onChange }: DatePickerProps) => {
  return (
    <Popover>
      {/* Botão que ativa o popover */}
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? (
            new Date(value).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })
          ) : (
            <span>Selecione uma data...</span>
          )}
        </Button>
      </PopoverTrigger>

      {/* Conteúdo do popover contendo o calendário */}
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange} // Passando a função para lidar com a seleção
          initialFocus
          locale={ptBR} // Localização brasileira
        />
      </PopoverContent>
    </Popover>
  );
};

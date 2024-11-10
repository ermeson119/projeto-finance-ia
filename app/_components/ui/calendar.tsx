import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"; // Importando estilos padrão
import { Locale } from "date-fns"; // Importando tipo de localização

// Propriedades aceitas pelo Calendar
interface CalendarProps {
  mode: "single";
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  initialFocus?: boolean;
  locale?: Locale;
}

// Componente Calendar
export const Calendar = ({
  mode,
  selected,
  onSelect,
  initialFocus,
  locale,
}: CalendarProps) => {
  return (
    <DayPicker
      mode={mode}
      selected={selected}
      onSelect={onSelect} // Chamado ao selecionar uma data
      locale={locale}
      initialFocus={initialFocus}
    />
  );
};

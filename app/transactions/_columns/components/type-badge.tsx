import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgProos {
    transaction: Transaction
}



const TransactionsTypeBadge = ({transaction}: TransactionTypeBadgProos) => {
    if (transaction.type === TransactionType.DEPOSIT) {
        return (
            <Badge className="bg-muted text-primary hover:bg-muted font-bold">
                <CircleIcon className="fill-primary mr-2" size={10} />
                Depósito
            </Badge>
        );
    }

    if (transaction.type === TransactionType.EXPENSE) {
        return (
            <Badge className="bg-muted text-danger hover:bg-muted font-bold">
                <CircleIcon className="fill-destructive mr-2" size={10} />
                Despesa
            </Badge>
        );
    }

    return (
        <Badge className="bg-muted text-white hover:bg-muted font-bold">
            <CircleIcon className="fill-white mr-2" size={10} />
            Investimento
        </Badge>
    );
}

export default TransactionsTypeBadge;

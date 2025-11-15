import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export interface YarnData {
    id: string;
    totalWeight: string;
    totalCost: string;
    usedWeight: string;
}

interface YarnEntryProps {
    yarn: YarnData;
    index: number;
    onUpdate: (id: string, field: keyof YarnData, value: string) => void;
    onRemove: (id: string) => void;
    calculatedCost: number;
}

export const YarnEntry = ({ yarn, index, onUpdate, onRemove, calculatedCost }: YarnEntryProps) => {
    return (
        <Card className="p-4 bg-card border-border transition-all duration-200 hover:shadow-md">
            <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-foreground">Fio #{index + 1}</h3>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onRemove(yarn.id)}
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>

            <div className="space-y-3">
                <div>
                    <Label htmlFor={`totalWeight-${yarn.id}`} className="text-sm text-muted-foreground">
                        Peso Total (g)
                    </Label>
                    <Input
                        id={`totalWeight-${yarn.id}`}
                        type="number"
                        min="0"
                        step="0.01"
                        value={yarn.totalWeight}
                        onChange={(e) => onUpdate(yarn.id, 'totalWeight', e.target.value)}
                        className="mt-1"
                        placeholder="100"
                    />
                </div>

                <div>
                    <Label htmlFor={`totalCost-${yarn.id}`} className="text-sm text-muted-foreground">
                        Custo Total (R$)
                    </Label>
                    <Input
                        id={`totalCost-${yarn.id}`}
                        type="number"
                        min="0"
                        step="0.01"
                        value={yarn.totalCost}
                        onChange={(e) => onUpdate(yarn.id, 'totalCost', e.target.value)}
                        className="mt-1"
                        placeholder="15.00"
                    />
                </div>

                <div>
                    <Label htmlFor={`usedWeight-${yarn.id}`} className="text-sm text-muted-foreground">
                        Peso Utilizado (g)
                    </Label>
                    <Input
                        id={`usedWeight-${yarn.id}`}
                        type="number"
                        min="0"
                        step="0.01"
                        value={yarn.usedWeight}
                        onChange={(e) => onUpdate(yarn.id, 'usedWeight', e.target.value)}
                        className="mt-1"
                        placeholder="50"
                    />
                </div>

                {calculatedCost > 0 && (
                    <div className="pt-2 border-t border-border">
                        <p className="text-sm text-muted-foreground">Custo deste fio:</p>
                        <p className="text-lg font-semibold text-primary">R$ {calculatedCost.toFixed(2)}</p>
                    </div>
                )}
            </div>
        </Card>
    );
};
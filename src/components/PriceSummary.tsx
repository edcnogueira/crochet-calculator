import { Card } from "@/components/ui/card";

interface PriceSummaryProps {
    totalCost: number;
    margin: number;
    finalPrice: number;
}

export const PriceSummary = ({ totalCost, margin, finalPrice }: PriceSummaryProps) => {
    const marginAmount = totalCost * (margin / 100);

    return (
        <Card className="p-6 bg-accent border-border sticky top-4">
            <h2 className="text-2xl font-bold text-foreground mb-4">Resumo do Preço</h2>

            <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Custo de Material:</span>
                    <span className="font-medium text-foreground">R$ {totalCost.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-muted-foreground">Margem ({margin}%):</span>
                    <span className="font-medium text-foreground">R$ {marginAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-semibold text-foreground">Preço Final:</span>
                    <span className="text-2xl font-bold text-primary">R$ {finalPrice.toFixed(2)}</span>
                </div>
            </div>

            {totalCost > 0 && (
                <div className="mt-4 p-3 bg-background/50 rounded-lg">
                    <p className="text-xs text-muted-foreground text-center">
                        Este preço inclui materiais e sua margem de {margin}% pelo tempo e habilidade
                    </p>
                </div>
            )}
        </Card>
    );
};
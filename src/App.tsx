import "./index.css";

import { Plus, Scissors } from "lucide-react";
import { useState } from "react";
import { PriceSummary } from "@/components/PriceSummary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { YarnData } from "@/components/YarnEntry";
import { YarnEntry } from "@/components/YarnEntry";

export function App() {
	const [yarns, setYarns] = useState<YarnData[]>([
		{ id: crypto.randomUUID(), totalWeight: "", totalCost: "", usedWeight: "" },
	]);
	const [margin, setMargin] = useState<string>("30");

	const addYarn = () => {
		setYarns([
			...yarns,
			{
				id: crypto.randomUUID(),
				totalWeight: "",
				totalCost: "",
				usedWeight: "",
			},
		]);
	};

	const removeYarn = (id: string) => {
		if (yarns.length > 1) {
			setYarns(yarns.filter((yarn) => yarn.id !== id));
		}
	};

	const updateYarn = (id: string, field: keyof YarnData, value: string) => {
		setYarns(
			yarns.map((yarn) =>
				yarn.id === id ? { ...yarn, [field]: value } : yarn,
			),
		);
	};

	const calculateYarnCost = (yarn: YarnData): number => {
		const totalWeight = parseFloat(yarn.totalWeight) || 0;
		const totalCost = parseFloat(yarn.totalCost) || 0;
		const usedWeight = parseFloat(yarn.usedWeight) || 0;

		if (totalWeight === 0) return 0;
		return (usedWeight / totalWeight) * totalCost;
	};

	const totalCost = yarns.reduce(
		(sum, yarn) => sum + calculateYarnCost(yarn),
		0,
	);
	const marginValue = parseFloat(margin) || 0;
	const finalPrice = totalCost + (totalCost * marginValue) / 100;
	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-8 max-w-7xl">
				<div className="text-center mb-8">
					<div className="flex items-center justify-center gap-3 mb-3">
						<Scissors className="h-8 w-8 text-primary" />
						<h1 className="text-4xl font-bold text-foreground">
							Calculadora de Preço de Crochê
						</h1>
					</div>
					<p className="text-muted-foreground">
						Calcule o preço perfeito para suas criações artesanais
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2 space-y-4">
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-2xl font-semibold text-foreground">
								Detalhes dos Fios
							</h2>
							<Button onClick={addYarn} className="gap-2">
								<Plus className="h-4 w-4" />
								Adicionar Fio
							</Button>
						</div>

						<div className="space-y-4">
							{yarns.map((yarn, index) => (
								<YarnEntry
									key={yarn.id}
									yarn={yarn}
									index={index}
									onUpdate={updateYarn}
									onRemove={removeYarn}
									calculatedCost={calculateYarnCost(yarn)}
								/>
							))}
						</div>

						<div className="mt-6 p-4 bg-card border border-border rounded-lg">
							<Label
								htmlFor="margin"
								className="text-base font-medium text-foreground"
							>
								Margem de Lucro (%)
							</Label>
							<Input
								id="margin"
								type="number"
								min="0"
								step="1"
								value={margin}
								onChange={(e) => setMargin(e.target.value)}
								className="mt-2 max-w-xs"
								placeholder="30"
							/>
							<p className="text-sm text-muted-foreground mt-2">
								Esta porcentagem cobre seu tempo, habilidade e custos adicionais
							</p>
						</div>
					</div>

					<div className="lg:col-span-1">
						<PriceSummary
							totalCost={totalCost}
							margin={marginValue}
							finalPrice={finalPrice}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

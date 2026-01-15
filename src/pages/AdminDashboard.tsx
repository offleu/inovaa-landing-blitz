import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  ArrowLeft, 
  Plus, 
  TrendingUp, 
  Target, 
  DollarSign, 
  Calendar,
  Pencil,
  Trash2,
  BarChart3,
  FileText
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";

interface Contract {
  id: string;
  client_name: string;
  client_email: string | null;
  client_phone: string | null;
  service_description: string;
  contract_value: number;
  contract_date: string;
  payment_status: string;
  notes: string | null;
  created_at: string;
}

interface Goal {
  id: string;
  year: number;
  month: number | null;
  goal_value: number;
  goal_type: string;
}

const MONTHS = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const STATUS_COLORS: Record<string, string> = {
  pendente: "bg-yellow-500",
  pago: "bg-green-500",
  parcial: "bg-blue-500",
  cancelado: "bg-red-500"
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Contracts state
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [contractDialogOpen, setContractDialogOpen] = useState(false);
  const [editingContract, setEditingContract] = useState<Contract | null>(null);
  const [contractForm, setContractForm] = useState({
    client_name: "",
    client_email: "",
    client_phone: "",
    service_description: "",
    contract_value: "",
    contract_date: new Date().toISOString().split('T')[0],
    payment_status: "pendente",
    notes: ""
  });

  // Goals state
  const [goals, setGoals] = useState<Goal[]>([]);
  const [goalDialogOpen, setGoalDialogOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
  const [goalForm, setGoalForm] = useState({
    year: new Date().getFullYear().toString(),
    month: "",
    goal_value: "",
    goal_type: "mensal"
  });

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/admin");
        return;
      }

      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin");

      if (!roles || roles.length === 0) {
        toast.error("Acesso negado. Você não tem permissão de administrador.");
        navigate("/admin");
        return;
      }

      setIsAuthenticated(true);
      setLoading(false);
    };

    checkAuth();
  }, [navigate]);

  // Fetch data
  useEffect(() => {
    if (isAuthenticated) {
      fetchContracts();
      fetchGoals();
    }
  }, [isAuthenticated]);

  const fetchContracts = async () => {
    const { data, error } = await supabase
      .from("contracts")
      .select("*")
      .order("contract_date", { ascending: false });

    if (error) {
      toast.error("Erro ao carregar contratos");
      console.error(error);
    } else {
      setContracts(data || []);
    }
  };

  const fetchGoals = async () => {
    const { data, error } = await supabase
      .from("goals")
      .select("*")
      .order("year", { ascending: false });

    if (error) {
      toast.error("Erro ao carregar metas");
      console.error(error);
    } else {
      setGoals(data || []);
    }
  };

  // Contract handlers
  const handleContractSubmit = async () => {
    if (!contractForm.client_name || !contractForm.service_description || !contractForm.contract_value) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }

    const contractData = {
      client_name: contractForm.client_name,
      client_email: contractForm.client_email || null,
      client_phone: contractForm.client_phone || null,
      service_description: contractForm.service_description,
      contract_value: parseFloat(contractForm.contract_value),
      contract_date: contractForm.contract_date,
      payment_status: contractForm.payment_status,
      notes: contractForm.notes || null
    };

    if (editingContract) {
      const { error } = await supabase
        .from("contracts")
        .update(contractData)
        .eq("id", editingContract.id);

      if (error) {
        toast.error("Erro ao atualizar contrato");
        console.error(error);
      } else {
        toast.success("Contrato atualizado!");
        fetchContracts();
      }
    } else {
      const { error } = await supabase
        .from("contracts")
        .insert(contractData);

      if (error) {
        toast.error("Erro ao criar contrato");
        console.error(error);
      } else {
        toast.success("Contrato cadastrado!");
        fetchContracts();
      }
    }

    resetContractForm();
    setContractDialogOpen(false);
  };

  const resetContractForm = () => {
    setContractForm({
      client_name: "",
      client_email: "",
      client_phone: "",
      service_description: "",
      contract_value: "",
      contract_date: new Date().toISOString().split('T')[0],
      payment_status: "pendente",
      notes: ""
    });
    setEditingContract(null);
  };

  const editContract = (contract: Contract) => {
    setEditingContract(contract);
    setContractForm({
      client_name: contract.client_name,
      client_email: contract.client_email || "",
      client_phone: contract.client_phone || "",
      service_description: contract.service_description,
      contract_value: contract.contract_value.toString(),
      contract_date: contract.contract_date,
      payment_status: contract.payment_status,
      notes: contract.notes || ""
    });
    setContractDialogOpen(true);
  };

  const deleteContract = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este contrato?")) return;

    const { error } = await supabase.from("contracts").delete().eq("id", id);
    
    if (error) {
      toast.error("Erro ao excluir contrato");
    } else {
      toast.success("Contrato excluído!");
      fetchContracts();
    }
  };

  // Goal handlers
  const handleGoalSubmit = async () => {
    if (!goalForm.year || !goalForm.goal_value) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }

    const goalData = {
      year: parseInt(goalForm.year),
      month: goalForm.goal_type === "mensal" && goalForm.month ? parseInt(goalForm.month) : null,
      goal_value: parseFloat(goalForm.goal_value),
      goal_type: goalForm.goal_type
    };

    if (editingGoal) {
      const { error } = await supabase
        .from("goals")
        .update(goalData)
        .eq("id", editingGoal.id);

      if (error) {
        toast.error("Erro ao atualizar meta");
        console.error(error);
      } else {
        toast.success("Meta atualizada!");
        fetchGoals();
      }
    } else {
      const { error } = await supabase
        .from("goals")
        .insert(goalData);

      if (error) {
        toast.error("Erro ao criar meta. Verifique se já existe uma meta para este período.");
        console.error(error);
      } else {
        toast.success("Meta cadastrada!");
        fetchGoals();
      }
    }

    resetGoalForm();
    setGoalDialogOpen(false);
  };

  const resetGoalForm = () => {
    setGoalForm({
      year: new Date().getFullYear().toString(),
      month: "",
      goal_value: "",
      goal_type: "mensal"
    });
    setEditingGoal(null);
  };

  const editGoal = (goal: Goal) => {
    setEditingGoal(goal);
    setGoalForm({
      year: goal.year.toString(),
      month: goal.month?.toString() || "",
      goal_value: goal.goal_value.toString(),
      goal_type: goal.goal_type
    });
    setGoalDialogOpen(true);
  };

  const deleteGoal = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir esta meta?")) return;

    const { error } = await supabase.from("goals").delete().eq("id", id);
    
    if (error) {
      toast.error("Erro ao excluir meta");
    } else {
      toast.success("Meta excluída!");
      fetchGoals();
    }
  };

  // Analytics calculations
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const totalRevenue = contracts
    .filter(c => c.payment_status !== "cancelado")
    .reduce((sum, c) => sum + Number(c.contract_value), 0);

  const yearRevenue = contracts
    .filter(c => 
      new Date(c.contract_date).getFullYear() === currentYear && 
      c.payment_status !== "cancelado"
    )
    .reduce((sum, c) => sum + Number(c.contract_value), 0);

  const monthRevenue = contracts
    .filter(c => {
      const date = new Date(c.contract_date);
      return date.getFullYear() === currentYear && 
             date.getMonth() + 1 === currentMonth && 
             c.payment_status !== "cancelado";
    })
    .reduce((sum, c) => sum + Number(c.contract_value), 0);

  const annualGoal = goals.find(g => g.year === currentYear && g.goal_type === "anual");
  const monthlyGoal = goals.find(g => g.year === currentYear && g.month === currentMonth && g.goal_type === "mensal");

  // Chart data
  const monthlyData = MONTHS.map((month, index) => {
    const monthNum = index + 1;
    const revenue = contracts
      .filter(c => {
        const date = new Date(c.contract_date);
        return date.getFullYear() === currentYear && 
               date.getMonth() + 1 === monthNum && 
               c.payment_status !== "cancelado";
      })
      .reduce((sum, c) => sum + Number(c.contract_value), 0);

    const goal = goals.find(g => g.year === currentYear && g.month === monthNum && g.goal_type === "mensal");

    return {
      name: month.substring(0, 3),
      receita: revenue,
      meta: goal?.goal_value || 0
    };
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">Carregando...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/admin/artigos")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Artigos
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard de Vendas</h1>
              <p className="text-muted-foreground">Gerencie contratos e acompanhe suas metas</p>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(totalRevenue)}</div>
              <p className="text-xs text-muted-foreground">Todos os contratos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Anual ({currentYear})</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(yearRevenue)}</div>
              {annualGoal && (
                <p className="text-xs text-muted-foreground">
                  {((yearRevenue / annualGoal.goal_value) * 100).toFixed(1)}% da meta anual
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita do Mês</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(monthRevenue)}</div>
              {monthlyGoal && (
                <p className="text-xs text-muted-foreground">
                  {((monthRevenue / monthlyGoal.goal_value) * 100).toFixed(1)}% da meta mensal
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contratos Ativos</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contracts.filter(c => c.payment_status !== "cancelado").length}</div>
              <p className="text-xs text-muted-foreground">
                {contracts.filter(c => c.payment_status === "pendente").length} pendentes
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Desempenho Mensal ({currentYear})
            </CardTitle>
            <CardDescription>Comparação entre receita e metas mensais</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-muted-foreground" />
                  <YAxis 
                    tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
                    className="text-muted-foreground"
                  />
                  <Tooltip 
                    formatter={(value: number) => formatCurrency(value)}
                    labelFormatter={(label) => `Mês: ${label}`}
                  />
                  <Legend />
                  <Bar dataKey="receita" name="Receita" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="meta" name="Meta" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Contracts and Goals */}
        <Tabs defaultValue="contracts" className="space-y-4">
          <TabsList>
            <TabsTrigger value="contracts" className="gap-2">
              <FileText className="h-4 w-4" />
              Contratos
            </TabsTrigger>
            <TabsTrigger value="goals" className="gap-2">
              <Target className="h-4 w-4" />
              Metas
            </TabsTrigger>
          </TabsList>

          {/* Contracts Tab */}
          <TabsContent value="contracts">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Contratos Fechados</CardTitle>
                  <CardDescription>Gerencie os contratos da empresa</CardDescription>
                </div>
                <Dialog open={contractDialogOpen} onOpenChange={(open) => {
                  setContractDialogOpen(open);
                  if (!open) resetContractForm();
                }}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Novo Contrato
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>
                        {editingContract ? "Editar Contrato" : "Novo Contrato"}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="client_name">Nome do Cliente *</Label>
                          <Input
                            id="client_name"
                            value={contractForm.client_name}
                            onChange={(e) => setContractForm({...contractForm, client_name: e.target.value})}
                            placeholder="Nome do cliente"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="client_email">Email</Label>
                          <Input
                            id="client_email"
                            type="email"
                            value={contractForm.client_email}
                            onChange={(e) => setContractForm({...contractForm, client_email: e.target.value})}
                            placeholder="email@exemplo.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="client_phone">Telefone</Label>
                          <Input
                            id="client_phone"
                            value={contractForm.client_phone}
                            onChange={(e) => setContractForm({...contractForm, client_phone: e.target.value})}
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contract_date">Data do Contrato *</Label>
                          <Input
                            id="contract_date"
                            type="date"
                            value={contractForm.contract_date}
                            onChange={(e) => setContractForm({...contractForm, contract_date: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service_description">Descrição do Serviço *</Label>
                        <Input
                          id="service_description"
                          value={contractForm.service_description}
                          onChange={(e) => setContractForm({...contractForm, service_description: e.target.value})}
                          placeholder="Descrição do serviço contratado"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="contract_value">Valor do Contrato (R$) *</Label>
                          <Input
                            id="contract_value"
                            type="number"
                            step="0.01"
                            value={contractForm.contract_value}
                            onChange={(e) => setContractForm({...contractForm, contract_value: e.target.value})}
                            placeholder="0,00"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="payment_status">Status do Pagamento</Label>
                          <Select
                            value={contractForm.payment_status}
                            onValueChange={(value) => setContractForm({...contractForm, payment_status: value})}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pendente">Pendente</SelectItem>
                              <SelectItem value="pago">Pago</SelectItem>
                              <SelectItem value="parcial">Parcial</SelectItem>
                              <SelectItem value="cancelado">Cancelado</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Observações</Label>
                        <Textarea
                          id="notes"
                          value={contractForm.notes}
                          onChange={(e) => setContractForm({...contractForm, notes: e.target.value})}
                          placeholder="Observações adicionais..."
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => {
                        setContractDialogOpen(false);
                        resetContractForm();
                      }}>
                        Cancelar
                      </Button>
                      <Button onClick={handleContractSubmit}>
                        {editingContract ? "Salvar Alterações" : "Cadastrar Contrato"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Serviço</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contracts.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                          Nenhum contrato cadastrado
                        </TableCell>
                      </TableRow>
                    ) : (
                      contracts.map((contract) => (
                        <TableRow key={contract.id}>
                          <TableCell className="font-medium">{contract.client_name}</TableCell>
                          <TableCell>{contract.service_description}</TableCell>
                          <TableCell>{formatCurrency(Number(contract.contract_value))}</TableCell>
                          <TableCell>{new Date(contract.contract_date).toLocaleDateString('pt-BR')}</TableCell>
                          <TableCell>
                            <Badge className={`${STATUS_COLORS[contract.payment_status]} text-white`}>
                              {contract.payment_status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon" onClick={() => editContract(contract)}>
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => deleteContract(contract.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Goals Tab */}
          <TabsContent value="goals">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Metas</CardTitle>
                  <CardDescription>Configure suas metas mensais e anuais</CardDescription>
                </div>
                <Dialog open={goalDialogOpen} onOpenChange={(open) => {
                  setGoalDialogOpen(open);
                  if (!open) resetGoalForm();
                }}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Nova Meta
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        {editingGoal ? "Editar Meta" : "Nova Meta"}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label>Tipo de Meta</Label>
                        <Select
                          value={goalForm.goal_type}
                          onValueChange={(value) => setGoalForm({...goalForm, goal_type: value, month: ""})}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mensal">Mensal</SelectItem>
                            <SelectItem value="anual">Anual</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="year">Ano *</Label>
                          <Input
                            id="year"
                            type="number"
                            value={goalForm.year}
                            onChange={(e) => setGoalForm({...goalForm, year: e.target.value})}
                            min="2020"
                            max="2100"
                          />
                        </div>
                        {goalForm.goal_type === "mensal" && (
                          <div className="space-y-2">
                            <Label>Mês *</Label>
                            <Select
                              value={goalForm.month}
                              onValueChange={(value) => setGoalForm({...goalForm, month: value})}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o mês" />
                              </SelectTrigger>
                              <SelectContent>
                                {MONTHS.map((month, index) => (
                                  <SelectItem key={index + 1} value={(index + 1).toString()}>
                                    {month}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="goal_value">Valor da Meta (R$) *</Label>
                        <Input
                          id="goal_value"
                          type="number"
                          step="0.01"
                          value={goalForm.goal_value}
                          onChange={(e) => setGoalForm({...goalForm, goal_value: e.target.value})}
                          placeholder="0,00"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => {
                        setGoalDialogOpen(false);
                        resetGoalForm();
                      }}>
                        Cancelar
                      </Button>
                      <Button onClick={handleGoalSubmit}>
                        {editingGoal ? "Salvar Alterações" : "Cadastrar Meta"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Período</TableHead>
                      <TableHead>Valor da Meta</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {goals.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                          Nenhuma meta cadastrada
                        </TableCell>
                      </TableRow>
                    ) : (
                      goals.map((goal) => (
                        <TableRow key={goal.id}>
                          <TableCell>
                            <Badge variant={goal.goal_type === "anual" ? "default" : "secondary"}>
                              {goal.goal_type}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {goal.goal_type === "anual" 
                              ? goal.year 
                              : `${MONTHS[(goal.month || 1) - 1]} ${goal.year}`
                            }
                          </TableCell>
                          <TableCell className="font-medium">{formatCurrency(Number(goal.goal_value))}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon" onClick={() => editGoal(goal)}>
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => deleteGoal(goal.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

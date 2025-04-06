import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.css'],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    CurrencyPipe,
    NgFor
  ]
})
export class AgendamentoFormComponent {
  servicos = [
    { id: 1, nome: 'Corte Clássico', duracao: 30, preco: 50, icon: 'content_cut' },
    { id: 2, nome: 'Barba Completa', duracao: 45, preco: 35, icon: 'face' },
    { id: 3, nome: 'Pacote Premium', duracao: 90, preco: 80, icon: 'spa' },
    { id: 4, nome: 'Corte Infantil', duracao: 30, preco: 40, icon: 'child_care' }
  ];
  
  barbeiros = [
    { id: 1, nome: 'João Silva' },
    { id: 2, nome: 'Carlos Andrade' },
    { id: 3, nome: 'Marcos Oliveira' }
  ];
  
  form = new FormGroup({
    servico: new FormControl(''),
    barbeiro: new FormControl(''),
    data: new FormControl(''),
    horario: new FormControl(''),
    observacoes: new FormControl('')
  });
  
  horariosDisponiveis = this.gerarHorarios();
  
  private gerarHorarios(): string[] {
    const horarios = [];
    for (let hora = 9; hora <= 18; hora++) {
      horarios.push(`${hora}:00`, `${hora}:30`);
    }
    return horarios;
  }
  
  agendar() {
    console.log('Agendamento:', this.form.value);
    // Aqui você implementaria a lógica de envio para o backend
  }
}
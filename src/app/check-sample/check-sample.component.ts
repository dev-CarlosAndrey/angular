import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-check-sample',
  standalone: true,
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'] // Corrigido para styleUrls
})
export class CheckSampleComponent
implements OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy {

	quantidade: number = 0;

	constructor() {}

	ngOnDestroy(): void {
		console.log("Goodbye my friend");
	}

	adicionar() {
		this.quantidade += 1;
	}

	decrementar() {
		this.quantidade -= 1;
	}

	ngDoCheck(): void {
		console.log("DoCheck");
	}

	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}

	ngAfterContentInit(): void {
		console.log("ngAfterContentInit");
	}

	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked");
	}

	ngAfterViewInit(): void {
		console.log("ngAfterViewInit");
	}

	ngOnInit(): void {
		console.log("ngOnInit");
	}
}

import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    orderForm: FormGroup;
    tableshow: boolean;
    chartshow: boolean;
    loading: boolean;
    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];
    datas = [
        {
            No: "Test 1",
            Vendedor: 13,
            Cliente: 8.2,
            SKU: true,
            venta: "using 'Content here, content here' ",
            digitación: "Test 1",
            envío: 13,
            Estado: 8.2,
        },
        {
            No: "Test 2",
            Vendedor: 13,
            Cliente: 8.2,
            SKU: true,
            venta: "using 'Content here, content here' ",
            digitacin: "Test 1",
            envo: 13,
            Estado: 8.2,
        },
        {
            No: "Test 3",
            Vendedor: 13,
            Cliente: 8.2,
            SKU: true,
            venta: "using 'Content here, content here' ",
            digitación: "Test 1",
            envío: 13,
            Estado: 8.2,
        },
        {
            No: "Test 4",
            Vendedor: 13,
            Cliente: 8.2,
            SKU: true,
            venta: "using 'Content here, content here' ",
            digitacin: "Test 1",
            envo: 13,
            Estado: 8.2,
        },
        {
            No: "Test 5",
            Vendedor: 13,
            Cliente: 8.2,
            SKU: true,
            venta: "using 'Content here, content here' ",
            digitación: "Test 1",
            envío: 13,
            Estado: 8.2,
        }
    ];


    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.tableshow = false;
        this.chartshow = false
        this.loading = true;
        this.initOrderForm();
    }
    initOrderForm() {
        this.orderForm = this.formBuilder.group({
            dt1: [null, Validators.required],
            dt2: [null, Validators.required],
            dd1: [null, Validators.required],
            dd2: [null, Validators.required],
            dd3: [null, Validators.required],
            dd4: [null, Validators.required]
        });
    }
    gettingdata() {

        this.sleep(1000);
        this.tableshow = true;
        this.chartshow = true;


    }
    gettcsvData() {

        var options = {
            
            headers: ["No", "Vendedor", "Cliente", "SKU", "Total venta", "Fecha digitación", "Fecha envío", "Estado"]
        };
        new Angular5Csv(this.datas, 'My Report', options);
    }
    sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }
}

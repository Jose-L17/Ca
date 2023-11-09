import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UiComponent } from "./ui.component";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { modulo } from "../modulo/modulo";
import { maximo } from "../maximo/maximo";
import { minimo } from "../minimo/minimo";
import { media } from "../media/media";
import { logaritmo } from "../logaritmo/logaritmo";

//Suma---------------------------------------------
describe("Ui Addition - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should call modulo method", () => {
    let result = 0;
    result = modulo(2, 2);
    expect(result).toBe(0);
  });

  it("Should set operator1 model through ngModel", async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(component.operator2).toEqual(2.71);
  });

  it("should add operator1 and operator2 when i click the modulo-method ", () => {
    component.operator1 = 5.0;
    component.operator2 = 3.0;
    let modulo = fixture.debugElement.query(
      By.css(".modulo-method")
    );
    modulo.triggerEventHandler("click", null);
    expect(component.result).toBe(2);
  });
});

describe("Ui Maximo - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should call maximo method", () => {
    let result = 0;
    result = maximo(10, 2);
    expect(result).toBe(10);
  });

  it("should substract operator1 and operator2 when i click the maximo-method ", () => {
    component.operator1 = 5;
    component.operator2 = 2;
    let maximoButton = fixture.debugElement.query(By.css(".maximo-method"));

    // Verifica que se haya encontrado el botón
    expect(maximoButton).toBeTruthy();

    // Dispara el evento 'click' en el botón
    maximoButton.triggerEventHandler("click", null);

    expect(component.result).toBe(5);
  });

  it("Should render substraction in result div", () => {
    component.operator1 = 5;
    component.operator2 = 5;
    component.Maximo();
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".Result"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain("");
  });
});

describe("Ui Minimo - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should call minimo method", () => {
    let result = 0;
    result = minimo(5, 2);
    expect(result).toBe(2);
  });

  it("Should set operator1 model through ngModel", async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(component.operator2).toEqual(2.71);
  });

  it("should multiply operator1 and operator2 when i click the minimo button ", () => {
    component.operator1 = 5;
    component.operator2 = 2;
    let multiplicationButton = fixture.debugElement.query(
      By.css(".minimo-method")
    );
    multiplicationButton.triggerEventHandler("click", null);
    expect(component.result).toBe(2);
  });

  it("Should render multiplication in result div", () => {
    component.operator1 = 50;
    component.operator2 = 5;
    component.Minimo();
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".Result"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain("");
  });
});

describe("Ui Media - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should call media method", () => {
    let result = 0;
    result = media(5, 2);
    expect(result).toBe(3.5);
  });

  it("Should set operator1 model through ngModel", async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(component.operator2).toEqual(2.71);
  });
});


describe("Ui Logaritmo - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should call logaritmo method", () => {
    let result = 0;
    result = logaritmo(2, 2);
    expect(result).toBe(1);
  });

  it("Should set operator1 model through ngModel", async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(component.operator2).toEqual(2.71);
  });
});

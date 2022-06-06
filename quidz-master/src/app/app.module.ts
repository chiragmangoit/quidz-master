import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './header/sub-header/sub-header.component';
import { SliderComponent } from './slider/slider.component';
import { FormComponent } from './form/form.component';
import { SimpleSliderComponent } from './simple-slider/simple-slider.component';
import { SubSliderComponent } from './simple-slider/sub-slider/sub-slider.component';
import { SliderRecommendComponent } from './slider-recommend/slider-recommend.component';
import { ContentComponent } from './content/content.component';
import { SliderHoverComponent } from './slider-hover/slider-hover.component';
import { TravelComponent } from './travel/travel.component';
import { ApplicationComponent } from './application/application.component';
import { SubAppComponent } from './application/sub-app/sub-app.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [	
    AppComponent,
      HeaderComponent,
      SubHeaderComponent,
      SliderComponent,
      FormComponent,
      SimpleSliderComponent,
      SubSliderComponent,
      SliderRecommendComponent,
      ContentComponent,
      SliderHoverComponent,
      TravelComponent,
      ApplicationComponent,
      SubAppComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

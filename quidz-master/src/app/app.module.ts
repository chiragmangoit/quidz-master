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
import { ProductsComponent } from './products/products.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { PageHeaderComponent } from './event-details/page-header/page-header.component';
import { EventDetailMainComponent } from './event-details/event-detail-main/event-detail-main.component';
import { EventRightSideComponent } from './event-details/event-right-side/event-right-side.component';
import { ShareExpComponent } from './event-details/event-right-side/share-exp/share-exp.component';
import { RelatedActivityComponent } from './event-details/event-right-side/related-activity/related-activity.component';
import { PrimaryDetailComponent } from './event-details/event-detail-main/primary-detail/primary-detail.component';
import { SecondaryDetailComponent } from './event-details/event-detail-main/secondary-detail/secondary-detail.component';
import { ThirdDetailComponent } from './event-details/event-detail-main/third-detail/third-detail.component';
import { EventWidgetComponent } from './event-details/event-detail-main/event-widget/event-widget.component';
import { EventScheduleWidgetComponent } from './event-details/event-detail-main/event-schedule-widget/event-schedule-widget.component';
import { ReviewComponent } from './event-details/event-detail-main/review/review.component';
import { WidjetComponent } from './event-details/event-detail-main/review/widjet/widjet.component';
import { FormInnerComponent } from './event-details/event-detail-main/review/form/form.component';
import { ShareSectionComponent } from './event-details/event-detail-main/primary-detail/share-section/share-section.component';
import { TermsConditionComponent } from './event-details/event-detail-main/primary-detail/terms-condition/terms-condition.component';

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
      FooterComponent,
      ProductsComponent,
      EventDetailsComponent,
      PageHeaderComponent,
      EventDetailMainComponent,
      EventRightSideComponent,
      ShareExpComponent,
      RelatedActivityComponent,
      PrimaryDetailComponent,
      SecondaryDetailComponent,
      ThirdDetailComponent,
      EventWidgetComponent,
      EventScheduleWidgetComponent,
      ReviewComponent,
      WidjetComponent,
      FormInnerComponent,
      ShareSectionComponent,
      TermsConditionComponent
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

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [AppRoutingModule] // No BrowserModule here
})
.catch(err => console.error(err));

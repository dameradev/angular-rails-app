import { Component } from '@angular/core';
import { Document } from './document'
@Component({
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Documents dashboard"
  documents: Document[] = [
    {
      title: "My first doc",
      description: "desc for document",
      file_url: "https://google.com",
      updated_at: "13/12/18",
      image_url: "https://google.com",
    },
    {
      title: "My Second doc",
      description: "desc for document",
      file_url: "https://google.com",
      updated_at: "13/12/18",
      image_url: "https://google.com",
    },
    {
      title: "My Third doc",
      description: "desc for document",
      file_url: "https://google.com",
      updated_at: "13/12/18",
      image_url: "https://google.com",
    }
  ]
}

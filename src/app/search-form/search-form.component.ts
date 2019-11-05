import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {HttpServiceService} from '../http-service.service';
import{User} from '../user';
import{Repository} from '../repository';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {


  @Output() searchRepo = new EventEmitter<any>();
  user:User;
  repo:Repository;
  username:string;
  searchTerm:string;

  constructor(private httpService:HttpServiceService) { }

  getRepo(reposearch:any){
    this.searchRepo.emit(reposearch);
  }
  ngOnInit() {
  }

}

import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Anagram} from '../anagram'
import { AnagramService } from './anagrams.service';

@Component({
  selector: 'app-anagrams',
  templateUrl: './anagrams.component.html',
  styleUrls: ['./anagrams.component.css']
})
export class AnagramsComponent implements OnChanges {

  @Input() anagram: Anagram; 
  oldAnagramSeed: string = "";
  constructor(private anagramsService: AnagramService) { }


  getAnagrams(seed: string): void {
    this.anagramsService.getAnagrams(seed).subscribe(anagrams => this.anagram.anagrams = anagrams);
  }

  ngOnInit() {
  }
  
  ngOnChanges() {
  }
  
  ngDoCheck() {
    if(this.oldAnagramSeed !== this.anagram.seed){
      this.oldAnagramSeed = this.anagram.seed;
      this.getAnagrams(this.anagram.seed);
    }
  }

}
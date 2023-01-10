import { Post } from '../model/Post';
import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost!: Post[];
  post = {
    nome: '',
    mensagem: ''
  } as Post;

  faTrash = faTrash;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts(): void {
    this.postService.getPosts().subscribe((data: any)=>{
      this.listPost = data;
    });
  }

  savePost(): void {    
    this.postService.postPosts(this.post).subscribe((data: Post) => {
      console.log(this.post = data);
      window.location.reload();
    });
  }

  deletePost(post: Post): void {
    this.postService.postDelete(post.id).subscribe(() => {
      this.findPosts();
    });
  }
  
}
